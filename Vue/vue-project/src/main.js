import './assets/main.css'
import { createApp } from 'vue'
import SayGreeting from './components/SayGreeting.vue'

const app = createApp({
  components: {
    'say-greet': SayGreeting
  },
  data() {
    return {
      count: 0,
      name: 'Mos3aB',
      username: '',
      age: 23,
      gender: 'male',
      title: "<i class='job-title'>I'm working as: Software Engineer</i>",
      message: '',
      picked: '',
      clicked: true,
      selected: '',
      findLanguage: '',
      languages: [
        'C',
        'PHP',
        'MySQL',
        'JavaScript',
        'Vue',
        'Laravel',
        'HTML',
        'CSS',
        'SASS',
        'Bootstrap',
        'Github'
      ],
      address: {
        city: 'Cairo',
        country: 'Egypt'
      },
      tests: [
        {
          testName: 'testOne',
          result: '80%',
          isPassed: true
        },
        {
          testName: 'testTwo',
          result: '40%',
          isPassed: false
        },
        {
          testName: 'testThree',
          result: '90%',
          isPassed: true
        }
      ],
      imageUrlOne: '../images/01.jpg',
      imageUrlTwo: '../images/02.jpg',
      imageAltText: 'Mos3aB Image',
      imageSize: '200px',
      websiteUrl: 'https://www.google.com',
      pound: '',
      dollar: '',
      hour: '',
      minute: '',
      second: ''
    }
  },

  /*
  Computed vs Methods:
  * Computed:
      - Reactive: Automatically updates when its dependencies change.
      - Cached: Only recalculates when its dependencies change, making them more efficient for expensive calculations.
      - Readability: Can be used in templates like a property.
      - Performance: Computed properties are cached based on their reactive dependencies.
  * Methods:
      - Not Reactive: Do not automatically update when their dependencies change.
      - Methods are called on every re-render. [This can be a performance issue if the method is expensive.]
      - Performance: Methods are more suitable for simple operations.
      - Methods are more suitable for actions that happen in response to user interactions or other events.
      - Methods are more suitable for asynchronous operations.

  ?Note:
    use computed properties for values that depend on reactive data and should update
      automatically when the data changes. They are best for simple expressions
      and when performance is a concern due to caching.

    Use methods for actions that happen in response to user interactions or other events,
      especially when the operation is not directly related to displaying data or
      when the operation might be asynchronous.
  */
  methods: {
    increment() {
      this.count++
    },
    mouseOn() {
      console.log('Mouse Over')
    },
    mouseOut() {
      console.log('Mouse Out')
    },
    mouseClicked() {
      console.log('Mouse Clicked')
    },
    fullDataFromMethod() {
      console.log('Run From Method')
      return this.age * 2
    }
  },
  computed: {
    fullData() {
      console.log('Run')
      return `Hello: ${this.name} - Your age is: ${this.age}`
    },
    filterLanguages() {
      let filtering = new RegExp(this.findLanguage, 'i')
      return this.languages.filter((lang) => lang.match(filtering))
    },
    validateUsername() {
      if (!this.username) {
        return "username can't be empty"
      } else if (!/^[A-Za-z0-9_]+[A-Za-z0-9]*$/.test(this.username)) {
        return 'username must contain both letters and numbers [ONLY]'
      } else if (!isNaN(this.username)) {
        return "username can't be a number only"
      } else if (this.username.length < 8) {
        return "username can't be less than 8 charcter"
      } else if (this.username.length > 15) {
        return "username can't be more than 15 charcter"
      } else {
        return `Welcome ${this.username} your name is valid`
      }
    }
  },
  /*
  ? Computed vs Watch
  * Reactivity:
      Computed properties are cached and only recalculated when their dependencies change,
      making them efficient for expensive calculations. Watchers, on the other hand,
      are triggered every time the watched property changes, regardless of whether the change affects
      the outcome of the watcher's logic.
  * Use Case:
        Use computed properties for simple, dependent values that don't require side effects or asynchronous operations.
        Use watchers for more complex logic, such as performing API calls, manipulating data before setting it,
        or triggering side effects in response to data changes.
  * Performance:
        Computed properties are generally more performant than watchers because they avoid unnecessary computations.
        However, if the computation is very lightweight or doesn't benefit from caching, a watcher might be more appropriate.
  ? In summary:
      choose computed for reactive values that depend on other reactive properties and are not too complex,
      and use watch for more complex logic that needs to run in response to changes in your data.
  */

  watch: {
    pound: function (value) {
      if (!isNaN(value)) {
        this.dollar = Math.floor(value / 50)
        console.log('Pound')
      } else {
        this.dollar = ''
      }
    },
    dollar: function (value) {
      this.pound = Math.floor(value * 50)
      console.log('Dollar')
    },
    hour: function (val) {
      this.minute = val * 60
      console.log('Run Hour')
    },
    minute: function (val) {
      this.hour = val / 60
      this.second = val * 60
      console.log('Run Minute')
    },
    second: function (val) {
      this.minute = val / 60
      console.log('Run Second')
    }
  }
})

app.mount('#app')
