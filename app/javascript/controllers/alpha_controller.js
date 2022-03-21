import { Controller } from "@hotwired/stimulus"
import BaseService from "../services/base_service"

export default class extends Controller {
  connect() {
    window.EmpireGameStack = {
      services: {
        baseService: new BaseService()
      }
    }

    setTimeout( () => {
      const splash$ = $('.splash')
      splash$.animate(
          {opacity: 0},
          400,
          () => splash$.remove()
      )
    }, 1000)

    const bs = window.EmpireGameStack.services.baseService
    bs.alert_test()
  }
}
