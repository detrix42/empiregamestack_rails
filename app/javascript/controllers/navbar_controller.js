import { Controller } from "@hotwired/stimulus"
import BaseService from "../services/base_service"

export default class extends Controller {
  connect() {
    this.baseServie = widnow.baseService
  }


}
