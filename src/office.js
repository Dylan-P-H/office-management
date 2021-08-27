class Office {
  
  constructor() {
    this.meetingrooms = [];
  }

  addRoom(room) {
    this.meetingrooms.push(room);
  }

  listRooms() {
    return this.meetingrooms;
  }

  checkAvailable(room) {
    return `Meeting rooms availability is ${room.available}`;
  }
}