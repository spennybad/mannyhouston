export default class CalcNextPrevPage {

    static getPrevPage(pageNum) {
        if (pageNum == 0) {
            return null;
        }
        if (pageNum == 1) {
            return "/blog"
        } else {
            return `/blog/page/${pageNum - 1}`
        }
    }

    static getNextPage(pageNum, maxPage) {
        if (pageNum != maxPage - 1) {
            return `/blog/page/${parseInt(pageNum) + 1}`
        } else {
            return null;
        }
    }

}