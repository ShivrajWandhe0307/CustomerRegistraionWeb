package com.example.SpringAngular.Entity;

import jakarta.persistence.*;
@Entity
@Table(name="Customer")
public class Customer
{
    @Id
    @Column(name="Customer_Id",length=50)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerId;
    @Column(name="Customer_Name",length =100)

    private String customerName;
    @Column(name="Customer_Address",length = 50)
    private String customerAddress;
    @Column(name="Customer_MobileNo",length = 12)
    private int mobile;

    public Customer(int customerId, String customerName, String customerAddress,int mobile) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.mobile = mobile;
    }
    public Customer()
    {

    }

    public Customer(String customerName, String customerAddress, int mobile) {
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.mobile = mobile;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerName='" + customerName + '\'' +
                ", customerAddress='" + customerAddress + '\'' +
                ", mobile=" + mobile +
                '}';
    }
}
