export const rupiah = (num) => {
    return "IDR " + (new Intl.NumberFormat("id-ID").format(num));
}