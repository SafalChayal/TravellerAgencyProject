import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgalleryComponent } from './postgallery.component';

describe('PostgalleryComponent', () => {
  let component: PostgalleryComponent;
  let fixture: ComponentFixture<PostgalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostgalleryComponent]
    });
    fixture = TestBed.createComponent(PostgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
