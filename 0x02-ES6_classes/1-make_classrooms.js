import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const firstClassRoom = new ClassRoom(19);
  const secondClassRoom = new ClassRoom(20);
  const thirdClassRoom = new ClassRoom(34);
  return [firstClassRoom, secondClassRoom, thirdClassRoom];
}
