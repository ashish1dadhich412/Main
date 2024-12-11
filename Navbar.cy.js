class contentPage {
    scroll(){
        cy.visit("https://www.flipkart.com/")

    }
    NewContentISLoaded() {
        cy.get('[class="yAlKeh"]').scrollTo("bottom")
        cy.get('[class="yAlKeh"]').scrollTo("top")
        cy.get('[class="yAlKeh"]').scrollTo(0,1300)
    }
}
export default contentPage