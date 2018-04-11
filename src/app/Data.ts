export class ArticleModel {
    constructor(
        public title: string,
        public articleBody: string,
        public author: string,
        public imagePath: string,
        public marker?: number
        ) {
            this.title = title;
            this.articleBody = articleBody;
            this.author = author;
            this.marker = 250;
            this.imagePath = imagePath;
    }
}

let a1 = new ArticleModel('Christmas at office', `An office Christmas party is a wonderful way to show
 you appreciate your employees/coworkers. Even though you are at work you can still have a festive 
 celebration with these Christmas office party ideas and suggestions for activities! Start your party 
 off on the right foot by sending a fun invitation. You can always send group email, but it will build 
 anticipation in the office if you do something fun. If you are going to have a theme or activity at the 
 party, let your guests know on the invite so that they can be prepared. Here are a few fun suggestions:
 Gift exchange (white elephant or secret Santa), Cookie exchange, Potluck/recipe exchange, Scavenger hunt,
 Ornament exchange.  Buy an inexpensive felt stocking for each of the employees and write their names on 
 them with puffy paint. Cover a blank wall with a red brick scene setter and hang the stockings on the wall. 
 You could even slip a small treat in there (something light) like a gift card for a cup of coffee.
 `, 'Jane Dove', 'assets/images/xmas.jpeg');

let a2 = new ArticleModel('Morning', `Surely you know that time is an invaluable asset. Highly successful 
people take it up a notch by waking up at 5:30 am, 4:30 am and even 4:00 am. Not only will they have more 
control in their early hours, they’ll also have more opportunities to do things that matter to them. 
Start with waking up 15 minutes earlier than your usual time. Then, gradually adjust. 

Motivation doesn’t last forever, so you need to replenish yours regularly. Highly successful people know this, 
so they dedicate ample time to increase their supply. You’re more likely to continue accomplishing a task once 
you’re emotionally invested in it, right? 

Spend thirty minutes listening to inspirational anecdotes and empowering quotes.
`, 'Susan Smith', 'assets/images/morning.jpeg');

let a3 = new ArticleModel('Home', `Our homes are an extension of who we are: what we do within the walls of our 
abodes shapes our mood, affects our productivity, and influences our outlook on life. Scientific studies have 
shown that we can have an impact on our happiness by adjusting the tiny little habits and routines that constitute
 our daily lives — we are, in fact, in control of our outlook on life. 

 It's amazing how a few tweaks to our daily habits can become a catalyst for meaningful, positive change. Here are a 
 few simple things you can do every day to feel happier at home.

 1. Make your bed. In a popular post last month, I explained the many benefits of daily bed-making. Gretchen Rubin, 
 New York Times best-selling author of The Happiness Project, explains that this three minute task is one of the simplest 
 habits you can adopt to positively impact your happiness. 

 2. Bring every room back to "ready." I learned this trick from Marilyn Paul's clever book, It's Hard to Make a Difference 
 When You Can't Find Your Keys. It's a known fact: Clutter causes stress; order creates a haven from it. This mood-boosting 
 routine is simple: Take about three minutes to bring each room back to "ready" before you depart it. (Unless you have a toddler, 
or a partner who likes to simulate earthquakes, three minutes should be sufficient.) 
`, 'Betty Carren', 'assets/images/home.jpeg');


export const Data = [a1, a2, a3];



