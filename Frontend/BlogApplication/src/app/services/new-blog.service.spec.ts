import { TestBed } from '@angular/core/testing';

import { NewBlogService } from './new-blog.service';

describe('NewBlogService', () => {
  let service: NewBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
