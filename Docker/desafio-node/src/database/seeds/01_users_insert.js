exports.seed = async function(knex) {
  await knex('user').del()
  await knex('user').insert([
    {name: 'gabriel'},
    {name: 'maria'},
    {name: 'melissa'},
  ]);
};
