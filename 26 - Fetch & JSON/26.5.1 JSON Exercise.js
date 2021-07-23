/*Which of the following three code snippets is correct JSON syntax? Why are the other two options incorrect?*/

//a.
{
   type: "dog",
   name: "Bernie",
   age: 3
}
//b.
{
   "type": "dog",
   "name": "Bernie",
   "age": 3
}
//c.
{
   "type": 'dog',
   "name": 'Bernie',
   "age": 3
}

//Answer: B is correct. A has no double quotes and C uses single quotes. MUST USE DOUBLE QUOTES.

/*Which of the following three code snippets is correct JSON? Why are the other two options incorrect?*/

//a.
{
   "animals": [
      {
            "type": "dog",
            "name": "Bernie",
            "age": 3
      },
      {
            "type": "cat",
            "name": "Draco",
            "age": 2
      }
   ]
}
//b.
{
   [
      {
            "type": "dog",
            "name": "Bernie",
            "age": 3
      },
      {
            "type": "cat",
            "name": "Draco",
            "age": 2
      }
   ]
}
//c.
[
   {
         "type": "dog",
         "name": "Bernie",
         "age": 3
   },
   {
         "type": "cat",
         "name": "Draco",
         "age": 2
   }
]

//Answer: A is correct.   B is wrong because is has no 'object-name:'.  C is wrong because is has no 'object-name:' and no opening/closing {}.