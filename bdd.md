Title
A [stakeholder] performs some action.

Narrative
As a [stakeholder] I want [feature] so that [benefit].
In order to [benefit], a [stakeholder] wants [feature].

Scenario
Given [some environment]
When [something happens]
And [optionally something else happens]
Then [expected result]
And [optionally more things are expected]

Story 1
A vending machine needs power to operate

As a vending machine I want power so I can be used

Given that the vending machine is without power
When it is plugged in
Then vending machine displays a message 'Welcome, please enter selection'

Story 2
A vending machine needs a key for every item
The vending machine needs keys for every item so users can make a selection

Given a user is wanting to make a selection
When a key is entered into the machine

Have to do a check that there are items
When an item is bought remove that item from the stack

Pepsi Co. wants to sell their products in a vending machine using individual tags
As Pepsi Co. they want to sell their items with tags so users can
A user wants to buy a Mars bar
In order to provide the Mars bar, a user wants a place to input their selection
