import ReactPaginate from 'react-paginate'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import { ContainerItems } from './Pagination.styles'
import { IPagination } from 'types/components/pagination'

const Pagination: React.FC<IPagination> = ({
  child,
  handlePageClick,
  pageCount,
}) => {
  return (
    <ContainerItems size="xl">
      {child}
      <ReactPaginate
        pageCount={pageCount}
        previousLabel={<BsChevronLeft size={20} />}
        nextLabel={<BsChevronRight size={20} />}
        breakLabel={'...'}
        disabledClassName={'disabled-previous-next'}
        breakClassName="break-li-link"
        breakLinkClassName="break-link"
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        className="container-paginate"
        pageClassName="paginate-li"
        pageLinkClassName="paginate-link"
        previousClassName="paginate-li-previous"
        nextClassName="paginate-li-next"
        previousLinkClassName="previous-link"
        nextLinkClassName="next-link"
        activeClassName="page-active"
      />
    </ContainerItems>
  )
}

export default Pagination
