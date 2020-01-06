import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({ // функции асинхронные, все возвращают промисы
    state: { // коллекция состояний хранилища // ин-фа о текущем состоянии данных // состояние иммутабельно
        posts: []
    }, 
    mutations: { // коллекция изменений // a-ции, приводящие к изменению состояния
        setPosts(state, payLoad){ // payLoad - полезная нагрузка // у нас это посты
            state.posts = payLoad;
        }
    }, 
    actions: {  // коллекция действий // a-ции, приводящие к мутациям
        downloadPosts({commit}){
            if(!localStorage.getItem('__data__')){ // проверяем есть ли у нас данные в локалстор
                const fakedata = require('./fakeData.json'); 
                localStorage.setItem('__data__', JSON.stringify(fakedata.posts)) // если нет - загружаем из бд
            }            
            const posts = JSON.parse(localStorage.getItem('__data__')); // если есть - достаем
            commit('setPosts', posts); // засовываем в посты                       
        },

        async updatePost([state, dispatch], id, data){
            const post = await dispatch('getPostById', id); // ищем пост
            post.description = data.description; //редактируем
            localStorage.setItem('__data__', JSON.stringify(state.posts)) // сохраняем
        },

        async getPostById({state, dispatch}, id){
            if(!state.posts.length){
                await dispatch('downloadPosts');
            }
            for(const post of state.posts){
                if(post.id === id){
                    return post;
                }
            }
            return false;
        }
    }

    // тут еще бывает коллекция геттеров и сеттеров
})