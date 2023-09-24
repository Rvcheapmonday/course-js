export default {
    getRandomElement(array) {
      if (!array.length) {
        return null;
      }
  
    const index = Math.round(Math.random() * (array.length -1));
  
    return array(index);
    },
  
    getNextPhoto() {
      const friend = this.getRandomElement(friendDB);
      const photos = photosDB(friend.id);
      const photo = this.getRandomElement(photos);
  
      return {friend, url: photo.url };
    },
  };