describe('Meeting Room', () => {

  it('has a name', () => {
    let meetingRoom = new MeetingRoom('The Hired Guns', 5);
    expect(meetingRoom.name).toBe('The Hired Guns');
  });
});