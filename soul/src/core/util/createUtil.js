'use strict'
// 给模型数据(javascript对象)挂载额外的属性(请求自后端的数据)
const createUtil = {
    createPerson (obj, manage) {
        obj.type = 'person'
        obj.isRender = true
        obj.parent_radius = 300

        if (!manage.models[obj.type]) {
            manage.models[obj.type] = {}
        }

        if(manage.models[obj.type][obj.id]) {
            throw( new Error('id冲突, id是: ' + obj.id) )
        }
        manage.models[obj.type][obj.id] = obj
    },
    createAttack (obj, manage) {
        
    }
}

module.exports = createUtil
