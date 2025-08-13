export default async () => {
  return await window.api.sql('select * from categories order by id desc;', 'findAll')
}
