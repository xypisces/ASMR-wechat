import {
  HTTP
} from '../utils/http.js'

class LikeModel extends HTTP {
  onLike(isLike, art_id, type) {
    let url = isLike === 'like' ? 'like' : 'like/cancel'
    this.request({
      url,
      method:'POST',
      data: {
        art_id,
        type,
      }
    })
  }
}

export {
  LikeModel
}