import { Controller } from "@hotwired/stimulus"
import StarRating from "star-rating"

export default class extends Controller {
  connect() {
    new StarRating(this.element)
  }
}
