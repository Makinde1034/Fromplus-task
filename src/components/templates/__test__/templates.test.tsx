import React from 'react';
import { render, screen } from '@testing-library/react';
import Templates from '../templates' ;



describe('Template component test', () => {

    it("should contain 2000 templates",()=>{
        render(<Templates />);
        const allTemplates = screen.getAllByTestId(/template/i);
        expect(allTemplates).toBeInTheDocument()
    })
  
});