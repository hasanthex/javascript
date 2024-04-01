function print(f_name, l_name){
    console.log(`The name ${f_name} ${l_name} will print after 2 seconds.`)
}
setTimeout(print, 2000, "Mohammad", "Hasan");