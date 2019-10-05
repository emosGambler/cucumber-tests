Feature: Wallet
    User can create a wallet on a account and send money to other users.

    Scenario: Creating wallet
        Given user logins to account
        When user opens a new wallet
        Then a new wallet is created