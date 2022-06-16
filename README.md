### Technical interview
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Overview:**

_**First of all, clone repo and push to your existing repo or create a new one, or you can fork and start coding.**_


We have 2 main folders for frontend and backend part's, please use it without changes.
The main goal of this technical task check your hard skills and review your knowledge with technologies.
Please pay attention for completing this task as better as you can(after coding check lint errors, realize improvements, use tricks and tips to solve it as simple as you can without any long-terms).

You'll have **3 steps** to accomplish it and each of them will have points after review. Totally, you can have: 100% result -> 30 points. 
You have possibility for using any library which you want for UI, no matter bootstrap 3|4 or Material Design etc....
Good luck!

### **Novice** 4 points

- Create webpack configuration for project **1point.**
- Connect preprocessor sass/scss for frontend **1point.**
- Connect Redux also you can include redux devtools **1point.**
- Design login page by adding component react and organize structure **1point.**

### **Middle** 11 points
- Build API for login page, use JWT. you can use library or whatever you would like **4 points**
- Implement https://openweathermap.org/api/hourly-forecast create 4 days forecast weather for your region by using navigator JS for lat and lng. **Please use API KEY:** (b7a1f25e1ebee3f154d0a3e002defecb) 
_**Figma URL**_ https://www.figma.com/file/XwfZ2eainMW2gwpcCqHF8K/WeatherAppUplabs?node-id=0%3A1 **7 points**

P.S. Design is only for your vision, no need to make pixel perfect and etc. should be similar but colors and font-sizes must be the same. (use card component to implement it).

### **Advanced** 15 points
- Create at least 3 unit tests using jest to check your functionality **4 points**
- Create roles for users(Super Admin, Viewer). For viewer include only one day weather. Super Admin should see everything. **3 points**
- Create database **mongodb | mysql** **3 points**
- Deploy to heroku **5 points**