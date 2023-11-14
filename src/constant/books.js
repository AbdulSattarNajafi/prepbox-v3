import SATcover from '../assets/images/SAT-cover-website.svg'
import AlgebraBook from '../assets/books/Algebra_final.pdf'
import SATBook from '../assets/books/SAT.pdf'

const books = [
  {
    "name": "Algebra 1",
    "country": "USA",
    "id": "4fb5af9b-21ed-49bc-91bd-f1e1ef6fee23",
    "common_name": "algebra-1-common-core",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/usa_algebra_1.svg",
    "bookPDF_name": "PrepBox Workbook - US Common Core - Algebra 1",
    "bookPDF": AlgebraBook,
    "available": true
  },  
  {
    "name": "SAT Math Practice",
    "country": "USA",
    "id": "cd0cb9cd-9eaf-4783-8f80-da4690022cec",
    "common_name": "sat-practice-test-work-book",
    "bookPDF_name": "PrepBox Workbook - SAT 1 - Math",
    "bookPDF": SATBook,
    "cover_image": SATcover,
    "available": true
  },  
  {
    "name": "9 Math",
    "country": "CA",
    "id": "c1d61261-5031-4cb4-a8bb-713fecf635fe1",
    "common_name": "10-math-ver-n",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/ca_grade_9.svg",
    "available": false
  },
  {
    "name": "10 Math",
    "country": "CA",
    "id": "c1d61261-5031-4cb4-a8bb-713fecf635fe",
    "common_name": "10-math-ver-n",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/ca_grade_10.svg",
    "available": false
  },
  {
    "name": "Advanced Functions",
    "country": "CA",
    "id": "686b2c7e-0712-4541-996d-46952a100f5d",
    "common_name": "advanced-functions-ver-n",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/ca_advanced_functions.svg",
    "avaialable": false
  },
  {
    "name": "Pre-Algebra",
    "country": "USA",
    "id": "4fb5af9b-21ed-49bc-91bd-f1e1ef6fee231",
    "common_name": "algebra-1-common-core",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/usa_pre_algebra.svg",
    "available": false
  },
  {
    "name": "Algebra & Trigonometry",
    "country": "USA",
    "id": "45ab-21ed-49bc-91bd-f1e1ef6fee23",
    "common_name": "algebra-and-trigonometry",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/usa_algebra_and_trigonometry.svg",
    "avaialable": false
  },
  {
    "name": "Algebra II",
    "country": "USA",
    "id": "45af9b-21ed-49bc-91bd-f1e1ef6fee232",
    "common_name": "algebra-II",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/usa_algebra_2.svg",
    "avaialable": false
  },
  {
    "name": "Pre-Calculus",
    "country": "USA",
    "id": "45af9b-21ed-49bc-91bd-f1e1ef6fee233",
    "common_name": "PreCalculus",
    "cover_image": "https://prepanywhere.s3.amazonaws.com/static_book_covers/usa_pre_calculus.svg",
    "avaialable": false
  },
]

export default books