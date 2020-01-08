import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({ // функции асинхронные, все возвращают промисы
    state: { // коллекция состояний хранилища // ин-фа о текущем состоянии данных // состояние иммутабельно
        posts: []
    }, 
    mutations: { // коллекция изменений // ф-ции, приводящие к изменению состояния
        //!!! Мутации должны быть синхронными
        setPosts(state, payLoad){ // payLoad - полезная нагрузка // у нас это посты
            state.posts = payLoad;
        }
    }, 
    actions: {  // коллекция действий // ф-ции, приводящие к мутациям
        downloadPosts({commit}){
            if(!localStorage.getItem('__data__')){ // проверяем есть ли у нас данные в локалстор
                const fakedata = require('./fakeData.json'); 
                localStorage.setItem('__data__', JSON.stringify(fakedata.posts)) // если нет - загружаем из бд
            }            
            const posts = JSON.parse(localStorage.getItem('__data__')); // если есть - достаем
            commit('setPosts', posts); // засовываем в посты                       
        },

        async updatePost({state, dispatch}, id, data){ // моя реализация ниже //
            const post = await dispatch('getPostById', id); // ищем пост

            post.description = data.description; //редактируем
            post.tags = data.tags; //редактируем
            
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
        },


/////////////////////////////////////////////////////////////
// дальше мой код
/////////////////////////////////////////////////////////////

        async updatePost2({state, dispatch}, postData){
            console.log(postData);
            const post = await dispatch('getPostById', postData.id); // ищем пост

            post.description = postData.description; //редактируем
            post.tags = postData.tags; //редактируем
            
            localStorage.setItem('__data__', JSON.stringify(state.posts)) // сохраняем
            console.log(state.posts);
        }

/////////////////////////////////////////////////////////////        
    }

    // тут еще бывает коллекция геттеров и сеттеров
})