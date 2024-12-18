package br.com.gabriel.ddd.entity

data class Order(
    val id: String,
    val customerId: String,
    val items: ArrayList<OrderItem> = arrayListOf()
)