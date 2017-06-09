"use strict";
class Db {
    constructor() {
        this.DB_NAME = "CSS_REGRESSION";
        this.STORE_PROJECT = "Project";
        this.STORE_WEBSITE = "Website";
        this.db = new Dexie(this.DB_NAME);
        this.db.version(1).stores({
            project: 'name,id',
            website: 'project_name,name,id,urls'
        })
    }

    saveProject(project) {
        /*TODO project should be a plain object.*/
        this.db.project.put({name: project.name}).then(()=> {
            return this.db.project.get(project.name);
        }).then(project=> {
            console.log(project);
        })
    }

    saveWebsite(website) {
        this.db.website.put(website).then(()=> {
            return this.db.website.get(website.name);
        }).then(website=> {
            console.log(website);
        });
    }
}
