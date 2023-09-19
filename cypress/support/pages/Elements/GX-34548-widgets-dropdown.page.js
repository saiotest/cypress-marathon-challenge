class dropdown {
	get = {
		selectValue: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(0),
		selectGroup2: () => cy.get("div[id^='withOptGroup']"),
		selectOne: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(2),
		selectTitle: () => cy.get('.css-1wa3eu0-placeholder').eq(0),
		oldStyle: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(4),
		oldSelectMenu: () => cy.get('select#oldSelectMenu>option'),
		multiselect: () => cy.get('.css-1wa3eu0-placeholder').eq(1),
		standardMultiselect: () => cy.get('.col-md-6.col-sm-12>p>b').eq(1),
		itemMultiselect: () => cy.get('select[id^=cars] option'),
	};

	clickSelectValue() {
		this.get.selectValue().click();
	}
	clickSelectGroup() {
		this.get.selectGroup2().click();
	}
	clickSelectOne() {
		this.get.selectOne().click();
	}
	itemSelectOption() {
		this.get.selectGroup2().should('be.visible').click();
	}
	itemSelectTitle() {
		this.get.selectTitle().should('be.visible').click();
	}
	clickOldStyle() {
		this.get.oldStyle().click();
	}
	
	itemOldStyle() {
		
		const color = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black', 'White', 'Voilet', 'Indigo', 'Magenta', 'Aqua']
		const selectElement = this.get.oldSelectMenu();
		const randomColor =color[Math.floor(Math.random() * color.length)] ;
		selectElement.invoke('val', randomColor)
	
		Cypress.env('selectColor' ,randomColor)
	}
}

export const menuDropdown = new dropdown();
