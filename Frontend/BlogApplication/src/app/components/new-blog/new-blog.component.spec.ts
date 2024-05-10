import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlogComponent } from './new-blog.component';

describe('NewBlogComponent', () => {
  let component: NewBlogComponent;
  let fixture: ComponentFixture<NewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
