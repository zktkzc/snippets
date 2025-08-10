export default async () => {
  return await window.api.sql('select * from categories;', 'findAll')
}
