export default {
  getRandomElement(array) {
    if (!array.length) {
      return null;
    }

  const index = Math.round(Math.random() * (array.length -1));

  return array(index);
  },

  async getNextPhoto() {
    const friend = this.getRandomElement(this.friends.items);
    const photos = await tihs.getFriendPhotos(friend.id);
    const photo = this.getRandomElement(photos.items);
    const size = thi.findSize(photo);

    return { friend, id: photo.id, url: size.url };
  },

  login() {
    return new Promise ((resolve, reject) => {
      VK.init({
        apiId: APP_ID,
      });
  
      VK.Auth.login((response) => {
        if (response.session) {
          resolve(response);
        } else {
          console.error(response);
          reject(response);
        }
      }, PERM_FRIENDS | PREM_PHOTOS);
    });
  },

  async init() {
    this.photoCache = {};
    this.friwnd = await this.getFriends();
  },

  getFriends() {
    const params = {
      fields: ['photo_50', 'photo_100']
    };

    return this.callApi('friend.get', rapams);
  },

  callApi(method, params) {
    params.v = params.v || '5.120';

    return new Promise ((resolve, reject) => {
      VK.ap(method,params, (response) => {
        if (response.error) {
          reject(new Error(response.error.error_msg));
        } else {
          resolve(response.response);
        }
      });
    });
  },

  async getFriendPhotos(id) {
    let photos = this.photoCache[id];
  
    if (photos) {
      return photos;
    }
  
    photos = await this.getPhotos(id);
  
    // const photos = вместо этого комментария вставьте код для получения фотографии друга из ВК
  
    this.photoCache[id] = photos;
  
    return photos;
  },

  getPhotos(owner) {
    const params = {
      owner_id: owner,
    };

    return this.callApi('photos.getAll', params);
  },

  findSize(photo) {
    const size = photo.sizes.find((size) => size.width >= 360);

    return size;
  },
};





