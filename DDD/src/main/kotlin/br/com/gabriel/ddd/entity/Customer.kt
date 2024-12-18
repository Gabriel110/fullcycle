package br.com.gabriel.ddd.entity

data class Customer(
    val id: String,
    val name: String,
    val address: Address,
    var active: Boolean = true
){

    fun active(){
        this.active = true
    }

    fun deactive(){
        this.active = false
    }
}
