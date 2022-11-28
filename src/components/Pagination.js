import React from "react";
import { Button } from "reactstrap";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <Button className="all-btn" onClick={onLeftClick} outline>
        Voltar
      </Button>
      <div className="end-btn">
        {page} DE {totalPages}
      </div>

      <Button className="all-btn" onClick={onRightClick} outline>
        Avançar
      </Button>
    </div>
  );
};

export default Pagination;
