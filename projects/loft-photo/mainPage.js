import pages from './pages';
import model from './model';

export default {
  async getNextPhoto() {
    const { friend, id, url } = await model.getNextPhoto();
    this.setFriendAndPhoto(friend, id, url);
  },

  setFriendAndPhoto(friend, id, url) {
    const photoCopm = document.querySelector('component-photo');
    const headerPhotoComp = document.querySelector('component-header-photo');
    const headerNameComp = document.querySelector('component-header-name');
  },

  handleEvents() {
    let startFrom;

    document.querySelector('.component-photo').addEventListener('tuochstart', (e) => {
      e.preventDefault();
      startFrom = { y: e.changedTouches[0].pageY };
    });

    document.querySelector('.component-photo').addEventListener('tuochend', async (e) => {
      const direction = e.changedTouches[0].pageY - startFrom.y;

      if (direction < 0) {
        await this.getNextPhoto();
      }
    });
  },
};
