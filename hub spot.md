hub spot

Create an API from scratch that takes user names, emails, one country they could attend and what dates they could attend that country. Find which dates for each country that the most people could attend in two consecutive days and return the dates as strings that they would be attending them. POST the countries with the dates as JSON properties to their server until you get a status of 200. The resulting JSON they're looking for does not match the example result provided.


Onsite: 4 rounds in total
1 - Algorithmic: Coding on a laptop, 2 questions
2 - SQL Round: SQL queries related to a social media application
3 - Design Question: Open ended design question
4 - Behavioural Questions
Interview Questions
Merging two sorted arrays
Answer Question
Sum of pairs with a target sum




Interview
Applied online and had a talk on the phone as the first round. After that, you will get invited to complete a code challenge. Make sure to prepare with some coding relevant to the topics mentioned in the challenge's brief overview. After that you will be invited to an onsite interview. Environment was relaxed but professional.

Interview Questions
System design question about a social media application. Follow-up questions about potential database choices and choosing appropriate data structures.
Answer Question
Simple question about sorting number arrays. Follow-up about efficiency and alternative solutions.

I had four back-to-back interviews with different engineers from Hubspot, each asking different sorts of technical questions. Some involved system-design and some involved database schema/query design.
Interview Questions
Given a particular application, design the system end-to-end for how to implement all aspects of it. Using a whiteboard to diagram the whole process.

Interview Questions
design url shortener

Write a function that, given a list of numbers and a target number N, returns a list of pairs of numbers that sum to the target.

Write a function that, given two sorted lists of numbers and a target value V, returns a sorted merged list with at most V elements.

Design a database model for a social network with people who write posts and can have friends. Write a query to extract the latest posts from your friends.

Discuss how you would design a link shortener application.


What is the API you are hitting is rate limited?

The interview was done within one day ( took around 4hrs ) and consisted of 3 technical interviews and then an interview with the director of engineering, after each one they also discussed there role at Hubspot and were very open in showing me the technology they use and stuff they are working on. I was offered the option of using my own macbook for the it, which is great since it's a familiar setup, you're also able to lookup online resources like stackoverflow and google.
When I arrived I was greeted by the recruiter who contacted me originally and was told who I'd be meeting and some pointers for the day. I was also told to make my self welcome to the drinks and food on offer, and to take a break anytime I needed it.
The first one was a algorithm design question, was given input and desired output. I was asked about the time complexities each solution would offer (there was 3 solutions) and then had to code them out.

The second was adding functionality to an existing jQuery project ( you could also chose a project implemented using plain js). After that was to apply styling to make it match a provided image.
The third was questions around implementing different things in javascript. They touched on prototypal inheritance, string manipulation and returning a closure.
Finally I talked to the director of engineering, who went through some of my past experience, and asked situational questions.
After all of this was done I was given a tour of the office which was very pleasant, and was told I should be receiving feedback within one or two days.
Two days later I received and accepted an offer.
General Tip - All the question start out straight forward and get more difficult as you go along, and since your allowed reference different resources online, it's good to make sure your answering the questions in an environment that's easy to debug. For example I answered all the questions using chrome snippets which allowed me to stick a `debugger` statement in and step through the code and also gave me access to the console.

f you can create a simple Twitter clone in just jQuery you'll be set. Second guy asked me to build a simple function that could be done using a while loop then cover the edge cases. Last guys you built more simple functions like given a string, add a comma between each letter except the last. know how to add to the prototype

 Coding questions in each interview on SQL, algorithms, Javascript and web architecture.

 Merge sort two lists of varying length
Design a database and write the SQL for finding followers in a social network, displaying the recent posts of people you follow. Handling paging in sql queries
design a url shortener

If you're a JS guy, make sure you understand your closures.

Given an array of strings with only lowercase letters, create a function that returns an array of those same strings, but each string has its letters rearranged such that it becomes a palindrome (if possible, if not, return -1).

The first one was a algorithm design question, was given input and desired output. I was asked about the time complexities each solution would offer (there was 3 solutions) and then had to code them out.
The second was adding functionality to an existing jQuery project ( you could also chose a project implemented using plain js). After that was to apply styling to make it match a provided image.
The third was questions around implementing different things in javascript. They touched on prototypal inheritance, string manipulation and returning a closure.

Given a method which takes two unsorted arrays (A & B) and a number x, create an algorithm to merge and fetch the first x numbers of the merged array. Here there's a few ways to do it:
-you can create a new array C of size k after checking the size of both arrays you're about to merge, then loop through each A & B and add them to the new new array. At the end a simple for loop will print out the first x values form the merged array.
-proposed the solution of creating a Set of integers (mentioned that this won't contain duplicate elements) , loop through A & B add them to the Set and then at the end a simple for loop will print out the first x values.
-proposed also the solution of creating and ArrayList of int and do the same as above, this will obliviously contain all duplicate elements...etc

Then the interviewer asked what if A & B are sorted and now and I want to merge them but once the merge is complete, they should be sorted. I told him that I would merge them and then call the java.util.Arrays.sort(int[]) method that's sorts a specified array of ints into ascending numerical order. So I was asked what if I can't use the Arrays.sort method. Well, the only solution here is to be familiar with the Merge sort or Bubble sort algorithms unless you can come up with your own implementation. I pretty much hit the wall here because although I am familiar with sorting algorithms, how they work, i.e merge sort divide and concur with O(n log n) complexity as opposite to Bubble sort that is a O(n2) or a quick sort...etc I don't know the implementation by heart. So my answer here was, right in this situation I would merge the 2 sorted arrays and implement one of the the sort algorithms mentioned above, I told him about the Big O complexity...etc. The interviewer seemed to like my answer so I was asked to come up with my own sorting code, just give it a try at least...I eventually tried come up with some nested for loops...etc. "Lesson to learn form this - Learn at least a sorting algorithm my heart" Is not enough to name them, know how they work, Big O complexity - I think here is where I got a minus...and believe me I am pretty good a Java puzzles, palindromes etc.





I was asked to design the database for a Facebook sort of app. Talking about users, friendships, and posts. Let's say Jane is friend with John and Brian. Jane will log in and wants to see the latest 20 posts of her friends. Here I was actually really familiar with the design as I had to implement smth similar in one of my personal projects. To answer this question I used the example described in an article written by Tamil Selvan (Social Network Friends Relationship Database Design). I even read it a day before the interview as I knew I might get something similar. I literally went step by step similar in the article I mentioned about, talked about the queries how you get all the friends, talked about the Messages table which it will probably mapped on a OneToMany relationship with the users table. Described the query on how u get all the friends of Jane then lookup in the msg table to fetch the all msg order them by created date and display the first 20 of them. Then I was asked, what about if Jane after seeing the first 20 msg would like to see the next 20 and again and again (that's similar with what FaceBook does, as you noticed while scrolling down the page the older post keep loading). Since I am a Spring Developer here I talked about JpaRepository that extends PagingAndSortingRepository and I said that I would most probably try to implement this with the help of PagingAndSortingRepository abstraction that adds additional methods to ease paginated access to entities.


magine that Hubspot would like to create their own URL shortener service how would you design that. Again here i was pretty familiar with the subject as again I implemented this in one of my personal projects so I did a lot of research on this topic. Anyway, here I went again from describing the DB table to describing the REST API design as related to all HTTP requests, like POST and GET methods. Going even into details like examine the "path" associated with the incoming URL, validation, ways of shorting the URL like saving the url into a table and return the ID and convert it to base-62 or 64 to provide an unique identifier that you'll return to the user. Covered also the topic of maybe not directly leaking the DB ids to the URL (even so convert it to a base 62), in which case you can easily salt the IDs as you choose appropriate. How to save and reverse the salt. Covered as well a different implementation, this time which involved keys and hashing. Top of that I also mentioned that apart from the normal implementation we can build a REST API that does the same thing, allowing other services to use the Hubspot URL shortener, providing examples on how the structure of the rest endpoint name would look like, explain that we can also rate limit the API...etc I even covered the topic of that if I have like thousands of request per minute, here I said that I would probably use additional Web servers on the front end and, while behind I would use a load balancer so it can handle with the amount of incoming requests, make use of extensive caching to resolve the new URLs without having to go every time to the master table. In addition to that I could have multiple DB's a master and a few slaves, write only in my master and read only from the salves...There was a lot of taking and the interviewer seems really pleased with my answers.
