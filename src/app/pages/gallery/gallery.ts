import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  selectedImage: GalleryImage | null = null;
  selectedIndex: number = 0;

  images: GalleryImage[] = [
    { src: 'images/hvittegg.jpg',        alt: 'Skulptur av Andre Bajer, hvitt egg med et ansikt på',     title: 'White Egg' },
    { src: 'images/samling.jpg',          alt: 'Skulptursamling, flere skulpturer ved siden av hverandre', title: 'Collection' },
    { src: 'images/enginebluered.jpg',    alt: 'Skulptur i blå, rød og gull',                             title: 'Engine of Life 1' },
    { src: 'images/samling2.jpg',         alt: 'Skulptursamling, nærbilde',                                title: 'Collection' },
    { src: 'images/skulpturgrønnrød.jpg', alt: 'Skulptur grønn og rød ved siden av hverandre',            title: 'Spirals' },
    { src: 'images/enginerødsølv.jpg',    alt: 'Skulptur som er rød og sølvfarget',                        title: 'Engine of Life 2' },
    { src: 'images/gullansikt.jpg',       alt: 'Skulptur av ansikt, gull',                                 title: 'Golden Face' },
    { src: 'images/løvehode.jpg',         alt: 'Skulptur av hode, gull',                                   title: 'Lion Head' },
    { src: 'images/magicshoe.jpg',        alt: 'Skulptur: wearing the magic shoe, lysegrønn',              title: 'Wearing the Magic Shoe' },
    { src: 'images/deathqueen.jpg',       alt: 'Skulptur: hode, trefarget',                                title: 'Death Queen' },
    { src: 'images/enginesølv.jpg',       alt: 'Skulptur: abstrakt, sølvfarget',                           title: 'Engine of Life 3' },
    { src: 'images/gullegggrønn.jpg',     alt: 'Skulptur: egg, grønnfarget',                               title: 'Golden Egg' },
    { src: 'images/enginewater.jpg',      alt: 'Skulptur: abstrakt, blå, gull',                            title: 'Engine of Life — Water' },
    { src: 'images/enginegull.jpg',       alt: 'Skulptur: abstrakt, gullfarget',                           title: 'Engine of Life — Gold' },
    { src: 'images/eyetablet.jpg',        alt: 'Sculpture: abstract eye, golden',                          title: 'Eye Tablet' },
    { src: 'images/panatheia.jpg',        alt: 'Sculpture: female figure with crosses on her head',        title: 'Panathenaia' },
    { src: 'images/fingers.jpg',          alt: 'Sculpture: fingers joined in abstract figure',             title: 'Fingers' },
    { src: 'images/tabletscroll.jpg',     alt: 'Sculpture: tablet and scroll on a pole',                   title: 'Scroll' },
    { src: 'images/maskhand.jpg',         alt: 'Sculpture: mask covering a hand',                          title: 'Hidden Peace' },
    { src: 'images/womanspiral.jpg',      alt: 'Sculpture: woman with a spiral on her head',               title: 'Woman Spiral' },
    { src: 'images/womancity.jpg',        alt: 'Sculpture: woman lying on top of a city',                  title: 'Woman City' },
    { src: 'images/7gates.jpg',           alt: 'Sculpture: 7 gates and a red dot on golden tower',         title: '7 Gates' },
  ];

  openLightbox(index: number): void {
    this.selectedIndex = index;
    this.selectedImage = this.images[index];
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }

  next(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    this.selectedImage = this.images[this.selectedIndex];
  }

  prev(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[this.selectedIndex];
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft')  this.prev();
    if (event.key === 'Escape')     this.closeLightbox();
  }
}