export default async ({ params }) => {
  return await window.api.sql(`select * from contents where id = ${params.id}`, 'findOne')
}
