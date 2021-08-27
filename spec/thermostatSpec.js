'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  it('can increase the temperature', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  });

  it('can decrease the temperature', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  });

  it('doesnt let the temperature drop below 10', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)
  });

  it('has power saving mode on by default', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can be reset to the default temperature', () => {
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', () => {
    it('has a maximum temperature of 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('displaying usage levels', () => {
    describe('when the temperature is below 18 degrees', () => {
      it('it is considered low-usage', () => {
        for (let i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
  
    describe('when the temperature is between 18 and 25 degrees', () => {
      it('it is considered medium-usage', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
  
    describe('when the temperature is anything else', () => {
      it('it is considered high-usage', () => {
        thermostat.powerSavingMode = false;
        for (let i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});