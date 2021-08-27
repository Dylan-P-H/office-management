describe('WorkSpace', () => {

  // beforeEach(() => {
  //   let meetingRoomOne = new WorkSpace('The Hired Guns');
  // });

  it('has a name', () => {
    let meetingRoomOne = new WorkSpace('The Hired Guns');
    expect(meetingRoomOne.name).toBe('The Hired Guns');
  });
});