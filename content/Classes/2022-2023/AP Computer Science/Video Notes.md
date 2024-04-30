---
tags: comp-sci
---
Multiple choice - 40 Qs 90 mins
Free response - 4 Qs 90 mins
# Methods and Control Structures

void - doesn’t return, mutator
return - returns type
Make vars private, methods & constructors public
Method header: `access returnType methodName(paramType param) {}`
Class header: `access class className {}`
if return type is specified, must return that type
## 2D Array Traversals
## Left Menu
Broken down by units, broken down by topics
Specific videos
### Overview
Lecture for each unit
reference sheets, labs
### Review
Old AP Daily Reviews
## Nested for Loops
Iterating through two dimensions/iteration within another iteration
Outer loop and inner loop
Inner loop executes fully for each iteration of outer loop
```java
for (int outer = 0; outer < a; outer++) {
	for (int inner = 0; inner < b; inner++) {
		// do something
		// will run a*b times
	}
}
```

```java
Type[][] arr = new Type[numRows][numCols]; // 2D array of type 'Type'
for (int row = 0; row < arr.length; row++) {
	for (int col = 0; col < arr[0].length; col++) {
		// will iterate through index of every element in arr
		// will run numRows*numCols times
}
for (Type[] row : arr) {
	for (Type val : row) {
		// will iterate through every element in arr
		// will run numRows*numCols times
	}
}
```
# Array and ArrayList Traversals
-   Used to
    -   Determine min or max value
    -   Compute sum, avg, mode
    -   Determine if at least one element has property
    -   Determine if all elements have property
    -   Access all consecutive pairs of elements
    -   Determine the presence or absence of duplicate elements
    -   Determine number of elements meeting specific criteria
    -   Shift or rotate elements left or right
    -   Reverse order of elements

| For loop | Enhanced for loop |
|----|----|
| Uses index positions | Includes risk of bound errors|
|Can be used to access elements|Can be used to modify elements |
|Does not use index positions|No risk of bound errors
|Can be used to access elements|Can not be used to modify elements|
|Can call methods on objects or access properties (as in array elements, instance variables, etc.)| |

Arrays - use arr[i]
ArrayLists - use arrList.get(i)

## Practice Session 7: FRQ

```java
public void repopulate() {
	for (int i = 0; i < grid.length; i++) {
		for (int j = 0; j < grid[0].length; j++) {
			int rand;
			do {
				rand = (int)(Math.random() * MAX) + 1;
			} while (rand%10 != 0 || rand == 100);
			grid[i][j] = rand;
		}
	}
}

public int countIncreasingCols() {
	int count = 0;

	for (int j = 0; j < grid[0].length; j++) {
		boolean increasing = true;
		for (int i = 1; i < row.length; i++) {
			if (grid[i][j] < grid[i-1][j]) {
				increasing = false;
			}
		}
		if (increasing) {
			count++;
		}
	}
	return count;
}
```

## Practice Session 6:

```java
public double getAverageRating() {
	double total = 0;
	for (Review review : allReviews) {
		total += review.getRating();
	}
	return total / allReviews.length;
}

public ArrayList<String> collectComments() {
	ArrayList<String> comments = new ArrayList<String>();
	for (int i = 0; i < allReviews.length; i++) {
		String comment = allReviews[i].getComment();
		if (comment.indexOf("!") >= 0) {
			String last = comment.substring(comment.length()-1);
			if (!(last.equals("!") || last.equals("."))) {
				comment += ".";
			}
			comments.add(i+" - "+comment);
		}
	}
	return comments;
}
```

## Practice Session 3:

```java
public class Textbook extends Book {
	private int edition;
	
	public Textbook(String title, double price, int edition) {
		super(title, price);
		this.edition = edition;
	}

	public int getEdition() {
		return edition;
	}

	public String getBookInfo() {
		return super.getBookInfo()+"-"+edition;
	}

	public boolean canSubstituteFor(Textbook tb) {
		return getTitle().equals(tb.getTitle()) && edition >= tb.edition;
	}
```

1.  Methods and control structures
2.  Class implementation
3.  Array/ArrayList
4.  2D array

# Practice Session 2: FRQ - Game Level

```java
public int getScore() {
	int score = 0;
	if (levelOne.goalReached()) {
		score += levelOne.getPoints();
		if (levelTwo.goalReached()) {
			score += levelTwo.getPoints();
			if (levelThree.goalReached()) {
				score += levelThree.getPoints();
			}
		}
	}
	if (isBonus()) {
		score *= 3;
	}
	return score;
}

public int playManyTimes(int num) {
	int highest = 0;
	for (int i = 0; i < num; i++) {
		play();
		int score = getScore()
		if (score > highest) {
			highest = score;
		}
	}
	return highest;
}
```

# Practice Session 4: MCQ

1.  A
2.  A
3.  C

3/3