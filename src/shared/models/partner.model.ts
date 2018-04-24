export class PartnerModel {
  /**
   * Модель партнера квеста
   * @param {string} title - наименование партнёра
   * @param {string} description - описание
   * @param {[number]} priceRange - диапазон доступности награды
   */

  constructor(
    public title: string,
    public description: string,
    public priceRange: [number, number]
  ) {
    this.title = title;
    this.description = description;
    this.priceRange = priceRange;
  }
}
