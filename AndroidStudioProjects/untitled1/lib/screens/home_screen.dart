import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:untitled1/models/product.dart';
import 'package:untitled1/screens//product_details_screen.dart';

import 'package:flutter/services.dart' show rootBundle;

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  Future<List<Product>> loadProducts() async {
    final String response = await rootBundle.loadString('assets/products.json');
    final List<dynamic> data = json.decode(response);
    return data.map((item) => Product.fromJson(item)).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: const Text('Flor do Dia', style: TextStyle(
          color: Colors.white,
          fontWeight: FontWeight.bold
        ),),
        centerTitle: true,
      ),
      body: FutureBuilder<List<Product>> (
        future: loadProducts(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              return Text('Erro: ${snapshot.error}');
            }

            return ListView.builder(
              itemCount: snapshot.data?.length ?? 0,
              itemBuilder: (context, index) {
                final product = snapshot.data![index];

                return ListTile(
                  title: Text(product.name),
                  subtitle: Text(product.description),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => ProductDetailsScreen(product: product))
                    );
                  }
                );
              },
            );
          } else {
            return Center(
              child: CircularProgressIndicator(),
            );
          }
        },
      )
    );
  }
}
