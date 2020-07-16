import { decorate, observable, computed, action, toJS } from "mobx";

class Store {
    topics = ['techcrunch', 'apple', 'business']
    techcrunch = []
    apple = []
    business = []

    get techcrunchNews() {        
        return toJS(this.techcrunch)
    }

    get appleNews() {
        return toJS(this.apple)
    }

    get businessNews() {
        return toJS(this.business)
    }
    get allTopics() {        
        return toJS(this.topics)
    }


    loadNews(topic, payload) {
        this[topic] = payload
    }
}

Store = decorate(Store, {
    techcrunch: observable,
    apple: observable,
    business: observable,
    techcrunchNews: computed,
    appleNews: computed,
    businessNews: computed,
    allTopics: computed,
    loadNews: action
})

export default new Store()