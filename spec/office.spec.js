describe('Office', () => {

  it('can add new meeting rooms', () => {
    let office = new Office;
    let meetingRoom = new MeetingRoom('Los pistoleros llorando', 5);
    expect(office.addRoom(meetingRoom));
  });

  it('can list all meeting rooms', () => {
    let office = new Office;
    let meetingRoom1 = new MeetingRoom('Los tres burritos', 5);
    let meetingRoom2 = new MeetingRoom('Los pistoleros llorando', 3);
    let meetingRoom3 = new MeetingRoom('Los salvajes', 5);
    office.addRoom(meetingRoom1);
    office.addRoom(meetingRoom2);
    office.addRoom(meetingRoom3);
    expect(office.listRooms().length).toBe(3);
  });
});