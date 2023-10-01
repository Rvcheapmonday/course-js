import pages from './pages';
import('./styles.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
});

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

document.addEventListener('click', () => {
  const pageName = model.getRandomElement(pageNames);
  pages.openPage(pageName);
});