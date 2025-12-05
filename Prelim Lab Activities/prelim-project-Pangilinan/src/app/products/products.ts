import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterCategoryPipe implements PipeTransform {
  transform(services: any[], category: string) {
    return services.filter(s => s.category === category);
  }
}

@Component({
  selector: 'app-products',
  imports: [FilterCategoryPipe, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  services = [
    // Clothing
    { category: 'Clothing', name: 'Elden Ring Hoodie', desc: 'Premium hoodie featuring Grace symbol embroidery.', priceRange: '$65' },
    { category: 'Clothing', name: 'Dark Souls Tee', desc: 'Classic 100% cotton tee with bonfire artwork.', priceRange: '$25' },
    { category: 'Clothing', name: 'Bloodborne Hunter Jacket', desc: 'Fitted black jacket with gothic-inspired patches.', priceRange: '$120' },
    { category: 'Clothing', name: 'Lordvessel Cargo Pants', desc: 'Relaxed fit pants with utility pockets and embroidered details.', priceRange: '$75' },
    
    // Collectibles
    { category: 'Collectibles', name: 'Malenia Figure', desc: 'Highly detailed collectible statue of the Blade of Miquella.', priceRange: '$45' },
    { category: 'Collectibles', name: 'Soul of Cinder', desc: 'A figurine of the final boss from Dark Souls III.', priceRange: '$89' },
    { category: 'Collectibles', name: 'Radagon Bust', desc: 'Premium resin sculpture of Radagon of the Golden Order.', priceRange: '$55' },
    
    // Accessories
    { category: 'Accessories', name: 'Estus Flask Keychain', desc: 'Glow-in-the-dark resin keychain shaped like an Estus Flask.', priceRange: '$12' },
    { category: 'Accessories', name: 'Souls Pin Set', desc: 'Limited enamel pins featuring iconic FromSoftware symbols.', priceRange: '$18' },
    { category: 'Accessories', name: 'Talisman Pins', desc: 'Set of pins featuring talismans from Elden Ring.', priceRange: '$22' },
  ];
}
