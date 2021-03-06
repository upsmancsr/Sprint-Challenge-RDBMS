const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    add,
};

function find() {
    return db('projects');
}

function findById(id) {
    // function findActions(id) {
    //     return db('actions')
    //         .select('*')
    //         .from('actions')
    //         .where('project_id', id);
    // }
    id = id;
    const project = (id) => {
        return db('projects')
            .select('*')
            .where('id', id)
    }
    project();

    const projectActions = (id) => {
        return db('actions')
            .select('*')
            .where('project_id', id)
    }
    projectActions();

    return project;

    // return db
    //     .select('*')
    //     .from('projects', 'actions')
    //     .where('project.id', '=', 'actions.project_id')

        // return db('projects')
        // .select('*')
        // .join('actions', 'actions.project_id', 'projects.id')
        // .where('projects.id', id);

}

// function findActions(id) {
//     return db('actions')
//         .select('*')
//         .from('actions')
//         .where('project_id', id);
// }

function add(project) {
    return db('projects')
        .insert(project)
        .into('projects');
}