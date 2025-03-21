import React from "react";
import { Button } from "@/components/ui/common/Button";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/common/Pagination";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  const getPaginationItems = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const start = Math.max(1, currentPage - 6);
      const end = Math.min(totalPages, currentPage + 6);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-6 px-4 sm:px-0">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="ghost"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="p-2 sm:p-3"
            >
              <ArrowBigLeft />
            </Button>
          </PaginationItem>

          {getPaginationItems().map((page, index) => (
            <PaginationItem key={index}>
              {typeof page === "number" ? (
                <Button
                  variant={page === currentPage ? "default" : "ghost"}
                  onClick={() => setCurrentPage(page)}
                  className="p-2 sm:p-3"
                >
                  {page}
                </Button>
              ) : (
                <span className="px-2 sm:px-4">{page}</span>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <Button
              variant="ghost"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="p-2 sm:p-3"
            >
              <ArrowBigRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
