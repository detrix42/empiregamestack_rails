import { Controller } from "@hotwired/stimulus"
import BaseService from "../services/base_service"

export default class extends Controller {
  connect() {
    window['baseService'] = new BaseService();

    setTimeout( () => {
      const splash$ = $('.splash')
      splash$.animate(
          {opacity: 0},
          400,
          () => splash$.remove()
      )
    }, 1000)

  }
}
