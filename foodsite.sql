-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 01:07 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(255) NOT NULL,
  `product_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `product_url`, `created_at`) VALUES
(1, 'Grilled Sandwich', 19, './images/10.jpg', '2023-05-21 14:55:28'),
(2, 'Breakfast Deal', 19, './images/1.jpg', '2023-05-21 15:03:11'),
(3, 'Italian Pizza', 33, './images/2.jpg', '2023-05-21 15:03:11'),
(4, 'Chicken Veg', 10, './images/3.jpg', '2023-05-21 15:03:11'),
(5, 'Asian Daal', 7, './images/4.jpg', '2023-05-21 15:03:11'),
(6, 'Mutton Veg', 11, './images/5.jpg', '2023-05-21 15:03:11'),
(7, 'Classy Burger', 15, './images/6.jpg', '2023-05-21 15:03:11'),
(8, 'Grilled burder', 6, './images/7.jpg', '2023-05-21 15:03:11'),
(9, 'Sweet Dish', 8, './images/8.jpg', '2023-05-21 15:03:11'),
(10, 'Chicken Patty Burger', 12, './images/9.jpg', '2023-05-21 15:03:11'),
(11, 'Grilled Sandwich', 4, './images/11.jpg', '2023-05-21 15:03:11'),
(12, 'Ice cream', 10, './images/12.jpg', '2023-05-21 15:03:11'),
(13, 'Chicken Noodles', 20, './images/13.jpg', '2023-05-21 15:03:11'),
(14, 'Chicken Nuggets', 4, './images/14.jpg', '2023-05-21 15:03:11'),
(15, 'Fries', 10, './images/15.jpg', '2023-05-21 15:03:11'),
(16, 'Fruity Trifle', 7, './images/16.jpg', '2023-05-21 15:03:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
