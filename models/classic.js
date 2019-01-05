import { HTTP } from "../utils/http.js";

class ClassicModel extends HTTP {
  getLatest(callback) {
    this.request({
      url: "classic/latest",
      success: res => {
        callback(res);
      }
    });
  }
}

export { ClassicModel };
